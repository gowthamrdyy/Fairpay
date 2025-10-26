import axios from 'axios';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export const aiService = {
  async generateNegotiationTips(data: {
    currentSalary: number;
    targetSalary: number;
    role: string;
    experience: number;
    marketAverage: number;
  }): Promise<string> {
    try {
      const prompt = `As a career coach, provide 5 specific negotiation tips for someone in the role of ${data.role} with ${data.experience} years of experience. Their current salary is ₹${data.currentSalary}, they want ₹${data.targetSalary}, and the market average is ₹${data.marketAverage}. Be specific and actionable.`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        }
      );

      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error generating negotiation tips:', error);
      return this.getFallbackNegotiationTips(data);
    }
  },

  async generateEmailTemplate(data: {
    role: string;
    targetSalary: number;
    marketData: string;
  }): Promise<string> {
    try {
      const prompt = `Write a professional email template for negotiating a salary increase for a ${data.role} position. Target salary: ₹${data.targetSalary}. Include market data: ${data.marketData}. Keep it concise and professional.`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        }
      );

      return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error generating email template:', error);
      return this.getFallbackEmailTemplate(data);
    }
  },

  async analyzeSkillsGap(currentSkills: string[], targetRole: string): Promise<{
    missingSkills: string[];
    recommendations: string[];
  }> {
    try {
      const prompt = `Given current skills: ${currentSkills.join(', ')}. What skills are needed for ${targetRole}? List 5 missing skills and learning recommendations. Format as JSON with "missingSkills" and "recommendations" arrays.`;

      const response = await axios.post(
        `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        }
      );

      const text = response.data.candidates[0].content.parts[0].text;
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      throw new Error('Invalid response format');
    } catch (error) {
      console.error('Error analyzing skills gap:', error);
      return {
        missingSkills: ['Cloud Computing', 'System Design', 'Leadership'],
        recommendations: [
          'Take online courses in cloud platforms (AWS/Azure)',
          'Practice system design problems',
          'Lead small team projects',
        ],
      };
    }
  },

  getFallbackNegotiationTips(data: any): string {
    return `
**Negotiation Tips for ${data.role}:**

1. **Know Your Worth**: The market average is ₹${data.marketAverage}. You're asking for ₹${data.targetSalary}, which is ${((data.targetSalary / data.marketAverage - 1) * 100).toFixed(1)}% ${data.targetSalary > data.marketAverage ? 'above' : 'below'} market rate.

2. **Timing is Key**: Schedule the conversation after a major achievement or positive performance review.

3. **Use Data**: Reference industry benchmarks and your specific contributions to the company.

4. **Be Confident**: Practice your pitch beforehand and maintain a professional, confident tone.

5. **Consider Total Compensation**: If salary flexibility is limited, negotiate for bonuses, stock options, or additional benefits.
    `.trim();
  },

  getFallbackEmailTemplate(data: any): string {
    return `
Subject: Request for Salary Discussion

Dear [Manager's Name],

I hope this email finds you well. I would like to schedule a meeting to discuss my compensation.

Over the past [time period], I have [list key achievements and contributions]. Based on my research of market rates for ${data.role} positions with my experience level, I believe my current compensation could be adjusted to better reflect my contributions and market standards.

According to industry data, the average salary for this role is approximately ₹${data.targetSalary}. I would appreciate the opportunity to discuss this with you.

Would you be available for a brief meeting this week?

Thank you for your consideration.

Best regards,
[Your Name]
    `.trim();
  },
};
