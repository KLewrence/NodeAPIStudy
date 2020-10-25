def apiPort = ''

pipeline{
    agent any
    environment { 
        PORT_TEST = '3001'
    }
    stages {
        stage ('Init Environment'){
            steps {
                script {
                    env.apiPort = '3001'
                }
            }
        }
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
            when { anyOf { branch 'master'} }
            steps{
                sshagent(credentials:['maquina2']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.22.186.4 "cd /home/NodeAPIStudy && sudo git pull && sudo npm install && forever start server.js"'
                }
            }
        }
        stage ('Run E2E Test'){
            when { anyOf { branch 'master'} }
            steps{
                nodejs(nodeJSInstallationName:'Node 14'){
                    sh '''npm run cucumber -- --API_URL http://3.22.186.4:${apiPort}'''
                }
            }
        }
        stage ('Stop CI API'){
            when { anyOf { branch 'master'} }
            steps{
                sshagent(credentials:['maquina2']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.22.186.4 "cd /home/NodeAPIStudy && forever stop server.js"'
                }
            }
        }
    }
    post { 
        failure { 
            sshagent(credentials:['maquina2']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ec2-user 3.22.186.4 "cd /home/NodeAPIStudy && forever stop server.js"'
                }
        }
    }
}