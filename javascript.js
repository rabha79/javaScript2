// task 1
function getDayType(week) {
    switch (week.toLowerCase()) {
      case 'saturday':
      case 'sunday':
        return 'Weekend';
      case 'monday':
      case 'tuesday':
      case 'wednesday':
      case 'thursday':
      case 'friday':
        return 'Weekday';
      default:
        return 'Invalid day';
    }
  }
  console.log(getDayType('monday'));    
  console.log(getDayType('friday'));    
  console.log(getDayType('Invalid'));   
// task 2
var person = {
    name: "Rabha",
    age: 21,
    gender: "female"
};
console.log(person.name);
console.log(person.age);
console.log(person.gender);

// task 3
var shoppingCart = {
    items: {
        apple: 5,
        banana: 3
    }
}
console.log(shoppingCart.items.apple);
console.log(shoppingCart.items.banana);
// task 4
var user = new Object({
    name: "dina",
    age: 17,
    gender: "female"
})
console.log(user.name);
console.log(user.age);
console.log(user.gender);
// another way
var person1 = {
    name: "rrrr",
    age:100,
    country: "EG"
}
var newUser = Object.create(person1);  
newUser.age =30;
console.log(newUser);
console.log(newUser.name);
console.log(newUser.age);
console.log(newUser.country);
// task 5
const sentence = "the quick brown fox jumps over the lazy dog";
var res = sentence.includes("fox");
console.log(res);
// task 6
var arr = [ 1, 2, 3, 4, 5 ];
var arrMulti = arr.map(function(item) {
  return item * 10;
})
console.log(arrMulti);
// task 6*
var arr = [ 1, 2, 3, 4, 5 ];
var arrOlder = arr.filter(function(item) {
  return item >=4 ;
})
console.log(arrOlder);
// search task
// object.assign
/**
 * هي خاصيه تستخدم لنسخ الخصائص من كائن واحد او اكثر من كائن 
 بالقيم الجديده ويعيد الكائن الناتج(target)ودمجها في كائن واحد ويحدث
 */
 const target = {
     name: 'Rabha',
     age:21
}
 const source = {
    age: 100, 
    city: 'New York' 
}
 Object.assign(target, source);
 console.log(target); 
// Array.sort()
/**
 * يتم استخدامها لترتيب عناصر المصفوفه ترتيبا ابجديا على حسب اول حرف  
 * (string)وفي حالة الارقام يتم ترتيبها ترتيبا تصاعديا ولكن بيوجد فيها اخطاء بسبب انها  بتعتبرهم
 */
const fruits = ['dog', 'car', 'book', 'apple'];
fruits.sort();
console.log(fruits);
const numbers = [5, 25, 3, 1, 100];
numbers.sort();
console.log(numbers);