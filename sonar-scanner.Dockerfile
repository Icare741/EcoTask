FROM arm64v8/openjdk:17-slim

ARG SONAR_SCANNER_VERSION=5.0.1.3006
ENV SONAR_SCANNER_HOME=/opt/sonar-scanner
ENV PATH=$PATH:${SONAR_SCANNER_HOME}/bin

# Installation des dépendances
RUN apt-get update \
    && apt-get install -y wget unzip \
    && rm -rf /var/lib/apt/lists/*

# Téléchargement et installation de SonarScanner
RUN wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip \
    && unzip sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip \
    && mv sonar-scanner-${SONAR_SCANNER_VERSION} ${SONAR_SCANNER_HOME} \
    && rm sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip

WORKDIR /usr/src

ENTRYPOINT ["sonar-scanner"] 