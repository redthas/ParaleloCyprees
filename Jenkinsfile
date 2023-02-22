pipeline {
    agent any
 
    tools {nodejs "Node"}
 
    stages {
 
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1_1"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/redthas/ParaleloCyprees.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 4606ddac-c3bf-492d-9eed-a4251758dc5f  --parallel'
                    
                    }
                }
 
                stage('Slave 2') {
                    agent {
                        label "Agent1_2"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/redthas/ParaleloCyprees.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 4606ddac-c3bf-492d-9eed-a4251758dc5f  --parallel'
                    
                    }
                }
 
                stage('Slave 3') {
                    agent {
                        label "Agent1_3"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/redthas/ParaleloCyprees.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 4606ddac-c3bf-492d-9eed-a4251758dc5f  --parallel'
                    
                    }
                }
 
                stage('Slave 4') {
                    agent {
                        label "Agent1_4"
                    }
                    steps {
                        git branch: 'main', url: 'https://github.com/redthas/ParaleloCyprees.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 4606ddac-c3bf-492d-9eed-a4251758dc5f  --parallel'
                    
                    }
                }
 
               
 
                
   
                  
            }
 
             
        }
 
    }
            
}