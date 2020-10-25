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
                sshagent(credentials:['maquina2']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.22.186.4 pwd'
                }
            }
        }
    }
}