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
                    sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.22.186.4 "cd /home/NodeAPIStudy && sudo git pull && sudo npm install && forever start server.js"'
                }
            }
        }
        stage ('Run E2E Test'){
            steps{
                nodejs(nodeJSInstallationName:'Node 14'){
                    sh 'npm run cucumber -- --API_URL http://3.22.186.4:3001'
                }
            }
        }
        /*stage ('Stop CI API'){
            steps{
                sshagent(credentials:['maquina2']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.22.186.4 "cd /home/NodeAPIStudy && forever stop server.js"'
                }
            }
        }*/
    }
    post { 
        always { 
            sshagent(credentials:['maquina2']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.22.186.4 "cd /home/NodeAPIStudy && forever stop server.js"'
                }
        }
    }
}