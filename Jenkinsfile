pipeline{
    agent any
    stages {
        stage ('Install dependencies'){
            steps{
                nodejs(nodeJSInstallationName:'Node 14'){
                    sh 'npm install'
                }
            }
        }
    }
}