targetScope = 'resourceGroup'

@description('Short environment name used in resource naming.')
param environmentName string

@description('Azure region. Keep this aligned with the Cloud Security Dojo deployment region.')
param location string = resourceGroup().location

@description('Static Web App resource name. Azure Static Web Apps names must be globally unique.')
param staticWebAppName string

@description('SKU for the Static Web App.')
@allowed([
  'Free'
  'Standard'
])
param skuName string = 'Free'

resource staticWebApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: staticWebAppName
  location: location
  sku: {
    name: skuName
    tier: skuName
  }
  tags: {
    project: 'ninjapaws-hq'
    environment: environmentName
    owner: 'ninjapaw'
    managedBy: 'bicep'
  }
}

output staticWebAppName string = staticWebApp.name
output defaultHostname string = staticWebApp.properties.defaultHostname