# 02 - Requisitos e Regras de Negócio

## 1. Requisitos Funcionais (RF)
* **RF01**: O sistema deve gerar um QR Code dinâmico para o estudante para cada embarque.
* **RF02**: O sistema deve permitir a leitura de tags NFC vinculadas ao cadastro do aluno.
* **RF03**: O backend deve registrar data, hora, coordenada GPS e ID do aluno no momento do check-in.
* **RF04**: O mapa deve exibir a posição do veículo com atualização mínima a cada 15 segundos.

## 2. Requisitos Não Funcionais (RNF)
* **RNF01**: O tempo de resposta para validação do QR Code/NFC não deve exceder 2 segundos.
* **RNF02**: O sistema deve utilizar PostgreSQL para persistência de dados relacionais.
* **RNF03**: A aplicação móvel deve ser compatível com Android e iOS via Expo.

## 3. Regras de Negócio (RN)
* **RN01**: Um estudante só pode realizar check-in se estiver com status "Ativo" no sistema administrativo.
* **RN02**: O check-in só é válido se a distância entre o aluno e o ônibus for inferior a 50 metros (evitar fraudes de presença).

## 4. Critérios de Aceite
* O motorista deve conseguir validar um embarque em menos de 5 segundos.
* O administrador deve conseguir exportar um relatório mensal de frequência em formato CSV/PDF.

---
**Pedido para o Agente Arquiteto**: Organize estes requisitos e identifique possíveis conflitos entre a geolocalização em tempo real e o consumo de dados móveis dos estudantes.