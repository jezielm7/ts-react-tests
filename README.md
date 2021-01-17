# Testes

## Por que escrevemos testes? 

### **Para garantir o bom funcionamento do sistema.**

      Um bug em produção custa 640 vezes mais para ser 
      resolvido do que se encontrado em desenvolvimento.

## Testes Funcionais

### **O que são testes funcionais?**

### Testes para os requisitos funcionais. 
### (Testam o comportamento do software).

<br/>

## Pirâmide de Testes

### **- Testes Unitários** (Base)

    Testam as funções (isoladamente) da aplicação.

    Características: 
    - Baixo custo
    - São fáceis
    - São precisos
    - Auxílio no desacoplamento do código.
    - Garantia do funcionamento do sistema.
    - Fogem do caso de uso do usuário.

### **- Testes de Integração** (Corpo)

    Testam as funções de forma integrada.

    Características:
    - São menos precisos.
    - Mais difíceis que os testes unitários.
    - Entregam mais valor (Se aproximam mais do caso de uso).

### **- Testes End To End - E2E** (Topo)

    Testam todo o fluxo completo do usuário.

    Características:
    - Alto custo.
    - Mais complexos.
    - São extremamente frágeis (Flaky).
    - Mais demorados (Criação e Execução).