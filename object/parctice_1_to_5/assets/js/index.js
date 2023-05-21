// 1. Tạo object person gồm các thông tin sau: id,name,address,age,email. Tạo các getter, setter tương ứng với mỗi thuộc tính, Tạo 1 method để in ra toàn bộ thông tin của object
let person = {
  id: 1,
  name: "Thach Thanh That",
  address: "Viet Nam",
  age: 21,
  email: "thattt@example.com",

  // id
  get getId() {
    return this.id;
  },
  set setId(value) {
    this.id = value;
  },

  // name
  get getName() {
    return this.name;
  },
  set setName(value) {
    this.name = value;
  },

  // address
  get getAddress() {
    return this.address;
  },
  set setAddress(value) {
    this.address = value;
  },

  // age
  get getAge() {
    return this.age;
  },
  set setAge(value) {
    this.age = value;
  },

  // email
  get getEmail() {
    return this.email;
  },
  set setEmail(value) {
    this.email = value;
  },

  printInfo() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Address: ${this.address}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  },
};

// person.printInfo();

// ==========================================================================

// 2. Thêm key-value về github của bạn (github là một đối tượng gồm các thuộc tính: id, username, url) và mức lương mong muốn (number), cập nhật tên của bạn thành dạng rút gọn, ví dụ: "Dang Tran Quyen" => "Tran Quyen" || "Quyen Dang", xóa mức lương đó đi

// Thêm key-value github
// person.github = {
//   id: "g1",
//   username: "ThanhThat",
//   url: "https://github.com/ThanhThat",
// };

// Thêm mức lương mong muốn (number)
// person.number = 15000000;

// Rút ngắn tên
// person.name = "Thanh That";

// Xóa key number (mức lương mong muốn)
// delete person.number;

// ==========================================================================

// 3. Đóng băng 2 thuộc tính email và github (sử dụng defineProperties)

// Object.defineProperties(person, {
//   email: {
//     writable: false,
//   },
//   github: {
//     writable: false,
//   },
// });

// ==========================================================================

// 4. Duyệt qua key-value của object bằng 2 cách (for/in || Object.entries)

// for/in
// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(key + ": " + person[key]);
//   }
// }

// object.entries
// Object.entries(person).forEach((entry) => {
//   console.log(entry[0] + ": " + entry[1]);
// });

// ==========================================================================

// 5. Thêm một phương thức để lấy ra thông tin github (return), Cho object salary, hãy gộp nó vào object ban đầu

// object salary
// const salary = {
//   basic: 50000,
//   bonus: 10000,

//   calculateTotal: function () {
//     let total = this.basic + this.bonus;
//     return total;
//   },
// };

// gộp salary vào object ban đầu
// person = Object.assign(person, salary);
// console.log(person);
