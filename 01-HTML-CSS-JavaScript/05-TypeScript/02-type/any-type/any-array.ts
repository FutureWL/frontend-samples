// @ts-ignore
let a: any[] = [1, true, 'free'];

a.forEach(element => {
    console.log(element);
});


a[1] = 2;
a[2] = 3;
a[3] = 4;

a.forEach(element => {
    console.log(element);
});
