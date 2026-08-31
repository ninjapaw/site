using './main.bicep'

param siteName = 'np-ninjapaws-site-dev-centralus'
param location = 'centralus'
param environmentName = 'development'
param siteSkuName = 'Free'
param tags = {
  application: 'ninjapaws-hq'
  component: 'web'
  environment: 'development'
}
