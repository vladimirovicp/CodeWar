// Вы, наверное, знаете о Function.prototype.bind методе в JavaScript. Он возвращает копию исходной функции, но эта функция
// всегда будет вызываться в указанном контексте. Проблема в том, что вы больше не можете повторно привязать другой контекст.

//Ваша задача - переопределить собственный Function.prototype.bind метод новым, который позволит вам повторно
//привязывать контекст несколько раз. В этом ката вам не нужно беспокоиться о каррировании, функция тестирования никогда не получит параметры.


// Function.prototype.bind = function (ctx) {
//     // Your code goes here
// };


console.log('123')


Function.prototype.bind = function (ctx) {
    const func = this;

    return function (...args){
        const rightCtx = this === globalThis ? ctx : this;
        return func.apply(rightCtx, args);
    }
};