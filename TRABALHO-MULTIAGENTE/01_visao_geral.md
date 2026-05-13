# 01 - Visão Geral do Projeto

## 1. Objetivo do Projeto
Desenvolver um ecossistema de Smart Mobility para o transporte universitário de Lagoa Formosa, MG, eliminando processos manuais e analógicos.

## 2. Problema que o Sistema Resolve
* **Ineficiência no embarque**: Lentidão causada por conferência de listas manuais e carteirinhas de papel.
* **Falta de Dados**: Ausência de métricas reais sobre ocupação e frequência para a gestão pública.
* **Segurança**: Sobrecarga do condutor ao acumular funções de fiscalização e falta de monitoramento logístico.

## 3. Atores Envolvidos
* **Estudante**: Realiza o auto-check-in e monitora a localização do ônibus.
* **Motorista**: Visualiza a lista de presença digital e alertas da rota.
* **Administrador Público**: Gerencia frotas, rotas e audita a frequência dos alunos.

## 4. Escopo Inicial
* **Mobile (Student/Driver)**: Geração/Leitura de QR Code, NFC e Mapa com geolocalização em tempo real.
* **Backend**: Gestão de identidades, logs de embarque e processamento de rotas.
* **Dashboard Administrativo**: Relatórios de demanda e controle de veículos.

## 5. Restrições Técnicas
* **Mobile**: React Native (Expo) - TypeScript.
* **Backend**: Java com Spring Boot (API REST).
* **Banco de Dados**: PostgreSQL.
* **Protocolos**: Integração com API de Mapas (Google Maps/Mapbox) e suporte a NFC.

## 6. Riscos Conhecidos
* Baixa conectividade em trechos rurais entre Lagoa Formosa e Patos de Minas.
* Latência na atualização da geolocalização em tempo real.

---
**Pedido para o Agente Arquiteto**: Analise o cenário acima e proponha a estrutura de módulos iniciais, focando em Clean Architecture no Backend para garantir a escalabilidade exigida pelo projeto.