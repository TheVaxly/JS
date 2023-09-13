const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isikukoodiKontroll(isikukood) {
   return isikukood.length === 11;
}

rl.question('Please enter an Estonian ID (isikukood): ', (userInput) => {
    if (isikukoodiKontroll(userInput)) {
        const ids = userInput;
        if (ids[0] % 2 === 0) {
            console.log('Sugu: Naine');
        } else {
            console.log('Sugu: Mees');
        }
        let year = ids[1] + ids[2];
        if (year > 23) {
            year = '19' + year;
        } else if (ids[0] === '1' || ids[0] === '2') {
            year = '18' + year;
        } else {
            year = '20' + year;
        }
        let month = '';
        switch (ids[3] + ids[4]) {
            case '1':
            month = 'January';
            break;
            case '02':
            month = 'February';
            break;
            case '03':
            month = 'March';
            break;
            case '04':
            month = 'April';
            break;
            case '05':
            month = 'May';
            break;
            case '06':
            month = 'June';
            break;
            case '07':
            month = 'July';
            break;
            case '08':
            month = 'August';
            break;
            case '09':
            month = 'September';
            break;
            case '10':
            month = 'October';
            break;
            case '11':
            month = 'November';
            break;
            case '12':
            month = 'December';
            break;
            default:
            month = 'Invalid month';
            break;
        }
        let day = ids[5] + ids[6];

        console.log(`Date of birth: ${day}. ${month} ${year}`);
        const LastTwoDigits = ids[7] + ids[8] + ids[9];
        let hospital = 'Puudub haigla info';
        if (LastTwoDigits >= 1 && LastTwoDigits <= 10) {
            hospital = 'Kuressaare Haigla';
        } else if (LastTwoDigits >= 11 && LastTwoDigits <= 19) {
            hospital = 'Tartu Ülikooli Naistekliinik, Tartumaa, Tartu';
        } else if (LastTwoDigits >= 21 && LastTwoDigits <= 150) {
            hospital = 'Ida-Tallinna keskhaigla, Pelgulinna sünnitusmaja (Tallinn)';
        } else if (LastTwoDigits >= 151 && LastTwoDigits <= 160) {
            hospital = 'Keila Haigla';
        } else if (LastTwoDigits >= 161 && LastTwoDigits <= 220) {  
            hospital = 'Rapla haigla, Raplamaa, Rapla vald';
        } else if (LastTwoDigits >= 221 && LastTwoDigits <= 270) {
            hospital = 'Ida-Viru keskhaigla (Kohtla-Järve, endine Jõhvi';
        } else if (LastTwoDigits >= 271 && LastTwoDigits <= 370) {
            hospital = 'Maarjamõisa kliinikum (Tartu), Jõgeva haigla';
        } else if (LastTwoDigits >= 371 && LastTwoDigits <= 420) {
            hospital = 'Narva haigla';
        } else if (LastTwoDigits >= 421 && LastTwoDigits <= 470) {
            hospital = 'Pärnu Haigla';
        } else if (LastTwoDigits >= 471 && LastTwoDigits <= 490) {
            hospital = 'Haapsalu haigla';
        } else if (LastTwoDigits >= 491 && LastTwoDigits <= 520) {
            hospital = 'Järvamaa haigla (Paide)';
        } else if (LastTwoDigits >= 521 && LastTwoDigits <= 570) {
            hospital = 'Rakvere haigla, Tapa haigla';
        } else if (LastTwoDigits >= 571 && LastTwoDigits <= 600) {
            hospital = 'Valga Haigla';
        } else if (LastTwoDigits >= 601 && LastTwoDigits <= 650) {
            hospital = 'Viljandi Haigla';
        } else if (LastTwoDigits >= 651 && LastTwoDigits <= 700) {
            hospital = 'Lõuna-Eesti Haigla (Võru), Põlva Haigla';
        }

        console.log(`Hospital: ${hospital}`);
    } else {
        console.log('Invalid Estonian ID.');
    }
    rl.close();
});
