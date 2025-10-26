/**
 * Utility functions for string operations
 */

/**
 * Normalize company name for case-insensitive comparison
 * @param name - Company name to normalize
 * @returns Normalized company name (lowercase, trimmed)
 */
export const normalizeCompanyName = (name: string): string => {
  return name.trim().toLowerCase();
};

/**
 * Compare two company names case-insensitively
 * @param name1 - First company name
 * @param name2 - Second company name
 * @returns True if names match (case-insensitive)
 */
export const compareCompanyNames = (name1: string, name2: string): boolean => {
  return normalizeCompanyName(name1) === normalizeCompanyName(name2);
};

/**
 * Check if company name includes search term (case-insensitive)
 * @param companyName - Company name to search in
 * @param searchTerm - Search term
 * @returns True if company name includes search term
 */
export const companyNameIncludes = (companyName: string, searchTerm: string): boolean => {
  return normalizeCompanyName(companyName).includes(normalizeCompanyName(searchTerm));
};

/**
 * Normalize role name for case-insensitive comparison
 * @param role - Role name to normalize
 * @returns Normalized role name (lowercase, trimmed)
 */
export const normalizeRoleName = (role: string): string => {
  return role.trim().toLowerCase();
};

/**
 * Compare two role names case-insensitively
 * @param role1 - First role name
 * @param role2 - Second role name
 * @returns True if roles match (case-insensitive)
 */
export const compareRoleNames = (role1: string, role2: string): boolean => {
  return normalizeRoleName(role1) === normalizeRoleName(role2);
};

/**
 * Normalize location name for case-insensitive comparison
 * @param location - Location name to normalize
 * @returns Normalized location name (lowercase, trimmed)
 */
export const normalizeLocationName = (location: string): string => {
  return location.trim().toLowerCase();
};

/**
 * Compare two location names case-insensitively
 * @param location1 - First location name
 * @param location2 - Second location name
 * @returns True if locations match (case-insensitive)
 */
export const compareLocationNames = (location1: string, location2: string): boolean => {
  return normalizeLocationName(location1) === normalizeLocationName(location2);
};
