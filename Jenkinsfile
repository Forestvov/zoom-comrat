pipeline {

    environment {
        registry = "zoom_f"
        acPort = 1337
        dockerImage = ''
        }

    agent {
    node {
     label 'zoom_release'
     }
    }

    stages {
            stage('Delete old container') {
                        steps {
                            script {
                             try {
                           sh("java --version")
                           sh("docker stop zoom_f")
                           sh("docker rm zoom_f")
                           sh("docker rmi zoom_f")
                                        } catch (err) {
                                            echo err.getMessage()
                                        }
                            }
                         }
                    }
            stage('Build docker image') {
                 steps {
                     script {
                        sh("docker build -t  zoom_f .")
                     }
                  }
             }
            stage('Run docker container') {
                 steps {
                     script {
                        sh("docker run -td --restart unless-stopped  --name zoom_f -p 80:3000 zoom_f")
                     }
                  }
             }
        }
}
