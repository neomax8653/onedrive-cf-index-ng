/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = [
  {
    // Configuration for OneDrive account 1
    clientId: 'f23f9918-14a5-46f1-9f74-13e57273b8f3',
    obfuscatedClientSecret: 'U2FsdGVkX1/hHUr0qvtP2dAJuY9MqdXfryBEQW3FkN4AI6MGmoxTOxEANDejnriD/4nJXcg4Lv4sSXI0O5Lf4w==',
    redirectUri: 'http://localhost',
    authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
    scope: 'user.read files.read.all offline_access',
    cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate'
  },
  {
    // Configuration for OneDrive account 2
  clientId: 'f23f9918-14a5-46f1-9f74-13e57273b8f3',
    obfuscatedClientSecret: 'U2FsdGVkX1/hHUr0qvtP2dAJuY9MqdXfryBEQW3FkN4AI6MGmoxTOxEANDejnriD/4nJXcg4Lv4sSXI0O5Lf4w==',
    redirectUri: 'http://localhost',
    authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
    scope: 'user.read files.read.all offline_access',
    cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate''
  },
  // Add more configurations for additional OneDrive accounts if needed
];
