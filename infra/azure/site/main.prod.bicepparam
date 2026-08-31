using './main.bicep'

param siteName = 'np-ninjapaws-site-centralus'
param location = 'centralus'
param environmentName = 'production'
param siteSkuName = 'Free'
param tags = {
  application: 'ninjapaws-hq'
  component: 'web'
  environment: 'production'
}
