	version = VersionNumber('${BUILD_DATE_FORMATTED, \"yyyy.MM.dd\"}-${BRANCH_NAME}.${BUILDS_TODAY, X}')
	version = version.replaceAll("/","-")
	
node {
  


withCredentials([[$class: 'StringBinding', credentialsId: 'OctoServer',
                    variable: 'OctoServer']]) {
withCredentials([[$class: 'StringBinding', credentialsId: 'OctoAPIKey',
                    variable: 'OctoAPIKey']]) {

	stage 'Checkout'
		checkout scm

	stage 'Build'
		bat """
		npm install
		ng Build
		"""
	stage 'Publish'
		bat """
		octo pack --id OctoTest.WebTest --version ${version} --basePath dist/ --format zip
		octo push --package OctoTest.WebTest.${version}.zip --server %OctoServer% --apikey API-%OctoAPIKey%
		echo "creating release"
		octo create-release --project OctoTestWeb --version ${version} --packageversion ${version} --server %OctoServer% --apikey API-%OctoAPIKey% 
		"""

	stage 'Archive'
		archive '**/*.zip'

		}
	}
}
