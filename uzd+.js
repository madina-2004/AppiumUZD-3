describe ('login', function () 
{

it ('correctregistration' , async function () {
await browser.pause(2000);

// driver.touchPerform([ 
// { action: 'press', options: { x: 600, y: 1185 }},
// { action: 'wait', options: { ms: 5000 }},
// { action: 'release' }
// ]);

await browser.pause(2000)
await $('//android.widget.ImageView[@index="3"]').click()
await browser.pause(5000)
await $('//android.widget.EditText').click()
await $('//android.widget.EditText').addValue('909065551')
await $('//android.widget.Button[@content-desc="Продолжить"]').click()
await $('//android.widget.EditText').addValue('123456')
await $('//android.widget.EditText').addValue('Madina')
await $('//android.widget.Button[@content-desc="Продолжить"]').click()

})

it ('uncorrect_phonenumber' , async function (){
await browser.pause (2000)

await $('//android.widget.ImageView[@index="3"]').click()
await browser.pause(5000)
await $('//android.widget.EditText').click()
await $('//android.widget.EditText').addValue(' ')
await $('//android.widget.Button[@content-desc="Продолжить"]').click()
// await $('//android.widget.EditText').addValue('123456')
// await $('//android.widget.EditText').addValue('Madina')
// await $('//android.widget.Button[@content-desc="Продолжить"]').click()

})

it ('uncorrect_otp' , async function (){

await browser.pause (2000)
await $('//android.widget.ImageView[@index="3"]').click()
await browser.pause(5000)
await $('//android.widget.EditText').click()   
await $('//android.widget.EditText').addValue('909065551')
await $('//android.widget.Button[@content-desc="Продолжить"]').click()
await $('//android.widget.EditText').addValue('000000')
// await $('//android.widget.Button[@content-desc="0 : 03 "]').addValue('')
await $('//android.widget.Button[@content-desc="Подтвердить"]').click()
    
})

it ('uncorrect_name' , async function (){
await browser.pause (2000)
await $('//android.widget.ImageView[@index="3"]').click()
await browser.pause(5000)
await $('//android.widget.EditText').click() 
await $('//android.widget.EditText').addValue('90906551')
await $('//android.widget.Button[@content-desc="Продолжить"]').click()
await $('//android.widget.EditText').addValue('123456')
await $('//android.widget.EditText').addValue(' ')
await $('//android.widget.Button[@content-desc="Продолжить"]').click()
await $('//android.widget.EditText[@text=" "]').click()
    
})

})




