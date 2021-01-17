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

    Ferramentas:
    - Jest (JS)
### **- Testes de Integração** (Corpo)

    Testam as funções de forma integrada.

    Características:
    - São menos precisos.
    - Mais difíceis que os testes unitários.
    - Entregam mais valor (Próximo do caso de uso).

    Ferramentas:
    - Jest (JS)

### **- Testes End To End - E2E** (Topo)

    Testam todo o fluxo completo do usuário.

    Características:
    - Alto custo.
    - Mais complexos.
    - São extremamente frágeis (Flaky).
    - Mais demorados (Criação e Execução).
    - Muito próximo do caso de uso do usuário.
    - Geralmente feito por QA Testers.

    Ferramentas:
    - Selenium
    - Cypress 

<br/>

## Anti Pattern

### **- Ice Cream Cone**
    Esse anti padrão acontece quando você define os testes mais 
    caros (manuais e E2E como os principais da sua aplicação).

### **Curiosidade:**
    80% dos testes no Google são unitários.

<br/>

## **Smoke Test** (Teste de fumaça) 

    Testam as funcionalidades principais.

<br/>

## **Testes de Regressão Visual** 
    Testam se uma nova funcionalidade 
    não altera um comportamento antigo.

<br/>

## **Testes Não Funcionais**
    Testam a disponibilidade da nossa aplicação.
## **Testes de Desempenho:**

    Teste de Carga: Testar o comportamento 
    em um cenário com múltiplos usuários.
    
    - Ferramentas: 
    - Postman
    - Insomnia
    
    Teste de stress: Testar a aplicação até o seu limite.

<br/>

## **Test Doubles** (Dublês de Teste)

    Fakes: São dublês de teste com implementações 
    reais diferentes da de produção. (Faker Library)

    Stubs: São funções com retornos já pré determinados.
    
    Mocks: São funções com retornos já pré determinados, 
    que validam a chamada à função.
    
    Spies: Age como um espião sob uma função.
    
    Dummies: São valores fictícios (vazios) que são passados mas não utilizados.