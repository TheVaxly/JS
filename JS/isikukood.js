const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
  
  function isBirthdateValid(ids) {
    const day = parseInt(ids[5] + ids[6]);
    const month = parseInt(ids[3] + ids[4]);
    let year = ids[1] + ids[2];
    if (year > 23) {
        year = '19' + year;
    } else if (ids[0] === '1' || ids[0] === '2') {
        year = '18' + year;
    } else {
        year = '20' + year;
    }
  
    if (day < 1 || day > 31 || month < 1 || month > 12) {
      return false;
    }
  
    const currentYear = new Date().getFullYear();
    if (year < 1800 || year > currentYear) {
      return false;
    }
  
    return true;
  }  

function kontrollNumber(isikukood) {
    const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const weights_2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    let sum = 0;
  
    for (let i = 0; i < 10; i++) {
      sum += parseInt(isikukood[i], 10) * weights[i];
    }
  
    const remainder = sum % 11;
  
    if (remainder === 10) {
      let sum_2 = 0;
      for (let i = 0; i < 10; i++) {
        sum_2 += parseInt(isikukood[i], 10) * weights_2[i];
      }
      const remainder_2 = sum_2 % 11;
      if (remainder_2 !== Math.floor(remainder_2)) {
        const adjustedRemainder_2 = Math.floor(remainder_2);
        sum_2 -= adjustedRemainder_2;
        return adjustedRemainder_2;
      }
      return remainder_2;
    }
  
    return remainder;
  }
  
  
  

function getMonth(isikukood) {
    const ids = isikukood
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
    return month;
}

function getHospital (isikukood) {
    const ids = isikukood
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
    return hospital;
}

function getYear(isikukood) {
    const ids = isikukood
    const kotroll = isikukoodiKontroll(ids);

    if (!kotroll) {
        return 'Invalid Estonian ID';
    }

    let sex = '';
    if (ids[0] % 2 === 0) {
        sex = "Woman"
    } else {
        sex = "Man"
    }
    let year = ids[1] + ids[2];
    if (year > 23) {
        year = '19' + year;
    } else if (ids[0] === '1' || ids[0] === '2') {
        year = '18' + year;
    } else {
        year = '20' + year;
    }
    return [year, sex]
}


function isikukoodiKontroll(isikukood) {
   return isikukood.length === 11;
}

rl.question('Please enter an Estonian ID (isikukood): ', (userInput) => {
    if (isikukoodiKontroll(userInput) && isBirthdateValid(userInput)) {
      const ids = userInput;
  
      const values = getYear(ids);
      const year = values[0];
      const sex = values[1];
      const month = getMonth(ids);
      const hospital = getHospital(ids);
      const kontrollnumber = kontrollNumber(ids);
  
      let day = ids[5] + ids[6];
      if (day[0] === '0') {
        day = day[1];
      }
  
      console.log(`Sex: ${sex}`);
      console.log(`Date of birth: ${day}. ${month} ${year}`);
      console.log(`Hospital: ${hospital}`);
      console.log(`Kontrollnumber: ${kontrollnumber}`);
    } else {
      console.log('Invalid Estonian ID or birthdate.');
    }
    rl.close();
  });
