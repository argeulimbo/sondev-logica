# Git - Controle de Versão

### Sistemas de Controle de Versão:
* CVS
* SVN
* Mercurial
* GIT

### Repositórios

* git init → inicializa repositório
      --bare apenas arquivos puros (alterações)
* git status → estado do repositório
* git add 'arquivo' → adiciona ao commit
* git rm 'arquivo' → remover do commit
* git commit -m "Mensagem" → commit com mensagem
* git branch -M 'master/main' → definir branch
* git config --local user.name "Seu nome" → configurar username git
* git config --local user.email "Seu e-mail" → configurar email
* git push -u → subir o commit para o repositório remoto

* git log → exibe log histórico
* git log --oneline → em linha só o necessário
* git log -p → alterações realizadas
* git log DOC → https://devhints.io/git-log-format

* git remote → lista repositórios remotos
* git remote add local pathing → adicionar repositório remoto
* git remote -v → lista dados do repositório (caminho)

* git clone pathing → para clonar repositório

* git pull → puxar os dados para o repositório

### Convenção de Commits
Padronização de commits: https://github.com/iuricode/padroes-de-commits 

### Manipulando repositório para novo colaborador
Antes de sincronizar as mudanças no código com algum outro repositório remoto, precisamos adicioná-lo ao nosso repositório local. Para adicionar basta fazer a ligação da seguinte forma:
`git remote add nome-repositorie caminho/para/o/repositorio`

Após é possível: 
`git push local master`  → push para empurrar os dados -> para -> LOCAL (repositório) -> na branch master

## 04. Trabalhando em equipe
Uso do Branch para se trabalhar em diferentes partes do código em simultâneo com o time:

`git branch titulo` → cria uma branch denominada titulo
`git checkout titulo` → altera para nova branch
`git checkout -b lista` → cria + altera para nova branch

* MERGE → une modificações de diferentes branch's 
    Exemplo: 
       branch master → eu corrijo determinado bug
       branch titulo → está 'versões' a frente e sem o bug corrigido (que tem relação apenas com a branch master, não titulo)

       1º Passo: retornar para a branch master com `git checkout master` e realizo o commit corrigindo `git commit -m "master: bug corrigido"`
       2º Passo: fazer o MERGE com a branch titulo com `git merge titulo` → assim irá conter modificações de ambos

### 04.01 - Atualizando a Branch
Ao utilizar o REBASE, o git trás os commit's da branch secundaria (Titulo) para a branch principal (Master)
`git checkout master` → `git commit -m "msg"`→ `git rebase titulo`   - Assim todos os commits em uma ÚNICA LINHA

### 04.02 - Resolvendo Conflitos
Para resolver conflitos basta identificar: 

'=====' sinal que indica o arquivo atual (Código Atual)
'>>>>>' são os dados que estou tentando trazers

Após corrigir (textualmente), basta executar `git status` e depois `git add arquivo` para continuidade.

## 05. Manipulando Versões
*Control + Z do GIT:*
    a) Case 1:  
       Apenas editei o código sem o uso do `git add .` mas pretendo remover as modificações → `git checkout -- arquivo`
    
    b) Case 2:
       Adicionei em `git add 'arquivo'` mas desejo remover → `git reset HEAD arquivo`

    c) Case 3:
       Fiz o commit → 
          1º identificar o hash do commit através de `git log`
          2º executar `git revert HASH`

*Guardando para Depois:*
    Stash: 
    a) Salvar todas alterações para local temporário
    `git stash` é salvo
    `git stash list` exibe tudo salvo

    b) Trazer os dados salvos e trabalhar com eles
    `git stash apply numeroStash` → pega da lista do stash