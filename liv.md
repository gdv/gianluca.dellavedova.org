---
  layout: default
  title: Laboratorio Informatico Virtuale (LIV)
---
#Laboratorio Informatico Virtuale (LIV)

####Per essere abilitati all’accesso

Per richiedere l’accesso al LIV è sufficiente compilare la seguente
[form](https://docs.google.com/spreadsheet/viewform?formkey=dFdjVWV4TElIdE9ZOWNZUFFuemt5bXc6MQ).

Almeno una volta alla settimana la lista delle nuove richieste viene
processata dai tecnici che gestiscono il laboratorio e le richieste
vengono soddisfatte.

Non viene data conferma dell’avvenuta abilitazione. Quindi siete
invitati a verificare se riuscite a collegarvi: inviatemi una mail in
caso di problemi.

####Forum

Seguendo il link
[https://groups.google.com/forum/?fromgroups#!forum/laboratorio-informatico-virtuale](https://groups.google.com/forum/?fromgroups#!forum/laboratorio-informatico-virtuale)
è possibile accedere ad un forum di discussione dedicato al LIV. Tutte
le informazioni relative a come accedere al LIV verranno migrate sul
forum.

Siete fortemente invitati ad utilizzare il forum per ogni domanda o problema relativa al LIV.


####Istruzioni per accedere al LIV

Per accedere al laboratorio virtuale è necessaria una connessione a
Internet. I passi da seguire sono due: prima è necessario creare una
VPN, e successivamente ci si può collegare  tramite desktop remoto
(remote desktop o terminal server) utlizzando un programma quale
connessione desktop remoto  ([RDC](https://en.wikipedia.org/wiki/Remote_Desktop_Services#Remote_Desktop_Connection) già presente sotto Windows CoRD (Mac) oppure  [Remmina](https://freerdp.github.io/Remmina/index.html) (Linux).

I dati per configurare il tutto sono:

Il protocollo della VPN è PPTP, inserendo come punto di accesso
`prx3-out-u7.servizi.didattica.unimib.it` e/o IP `149.132.157.171`.
Il tipo di autenticazione utlizzata è MS-CHAPv2 (Microsoft encrypted
authentication version 2).
Per chi utilizza Fastweb, è necessario configurare la VPN con
protocollo L2TP. In aggiunta a quanto appena descritto, bisogna
inserire la Pre-Shared Key: `W$G895vAVp0W918AgZ!` (in Windows XP la pre-shared key va inserita all’interno delle Impostazioni IPSec nel tab “Protezione” delle proprietà della connessione VPN).

Il server a cui collegarsi via desktop remoto è IP `10.109.8.52` e/o
nome `BLUE24v03.lib.unimib.it` (siccome si trova all’interno della VPN
potrebbe non essere raggiungibile utilizzando il nome).

Per entrambi i passi ci si autentica con le stesse credenziali dei
laboratori di Ateneo (username che inizia con BI) e dominio LIB.
Maggiori informazioni relative a tali credenziali sono sul sito del Settore Servizi Informatici per la Didattica.

Nel caso di problemi è necessario inviare le schermate in cui è possibile vedere il tipo di errore che si verifica e:

*    credenziali utilizzate (username) in particolare per connettersi ai
nostri server VPN bisogna accertarsi di indicare anche il dominio
nell’apposito campo (LIB). **Attenzione: non inviare anche la password**
*    giorni e orari in cui ha provato ad accedere
*    sistema operativo del computer da cui tenta di connettersi
*    provider internet utilizzato
*    marca e modello del modem/router utilizzato

#####Domande più frequenti

*    Cosa fare se sparisce la barra applicazioni di Windows?

Normalmente il problema dipende dal processo explorer.exe (Windows Explorer) che permette di navigare e visualizzare file e cartelle nei sistemi operativi Microsoft e quindi quando il processo è fermo l’utente non vede la Barra Applicazioni (Start) e le icone del desktop.

In questi casi si può provare ad usare la combinazione Ctrl+Alt-End (che equivale al Ctrl+Alt+Canc nelle sessioni locali) per aprire il TaskManager e dal menu FIle->Nuova Operazione (esegui) far ripartire il processo explorer.exe. Per avviare il taskmager si può usare anche la combinazione di tasti Ctrl+Shift+Esc che funziona comunque anche nelle sessione Remote Desktop.

*    Perchè non riesco più a collegarmi?

Probabilmente la password è scaduta (vale 6 mesi). Per attivare una nuova password bisogna andare da un tutor in un laboratorio informatico dell’Ateneo.
