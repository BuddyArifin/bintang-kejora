const text = 'kasur rusak';

const texts = text.split('').reverse().join('');

if (texts === text) {
  console.log('Polindrom');
} else {
  console.log('politermis');
}
