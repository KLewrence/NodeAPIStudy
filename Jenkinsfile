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
        stage ('Run Unit Test'){
            steps{
                nodejs(nodeJSInstallationName:'Node 14'){
                    sh 'npm test'
                }
            }
        }
        stage ('Deploy CI API'){
            steps{
                sshagent(['maquina2']) {
                    sh 'pwd'
                }
            }
        }
    }
}