const { expect } = require("chai");

describe('Advance XPath', ()=>{
 
 it('Verify current temp is less than or equal to feel-like temp',async ()=>{

     //1. launch www.accuweather.com
     await browser.url('https://www.accuweather.com/');
     await browser.pause(5000);

     //2. verify current temp is in between 72 and 73
     
     const currentTempElement = await $('//span[@class="recent-location-temp"]');
     const getTempValue= await currentTempElement.getText();
     
     const degIndex = getTempValue.indexOf('°');
      let  currentTemp = Number(getTempValue.substring(0,degIndex));

     let realFeelTemp = await $('//span[contains(@class,"real-feel-value")]');
     let getRealFeelValue= await  realFeelTemp.getText();
    
     const degIndexValue= getRealFeelValue.indexOf('°');
     let realFeelTemperature = Number(getRealFeelValue.substring(0,degIndexValue));

     expect(currentTemp <= realFeelTemperature,'Current temp is not less or equal to feel-like temperature').to.be.true;
     await browser.pause(5000);
       
        
   })

     it('Verify error on empty login flow',async ()=>{

       //1. Launch https:www.facebook.com/
       await browser.url('https://www.facebook.com/')
       await browser.pause(2000);
       await browser.maximizeWindow();


       // 2. Click 'Log In' button
       await $('//button[@data-testid="royal_login_button"]').click();
       await browser.pause(2000);


       //3. Verify error msg is displayed
      const errorMessage= await $('//div[starts-with(text(),"The email or mob")]').waitForDisplayed({timeout:3000});
      expect(errorMessage,'Error message is not displayed').to.be.true;


    })

    it.only('Verify the empty messenger login flow',async ()=>{

      //1. Launch https:www.facebook.com/
       await browser.url('https://www.facebook.com/')
       await browser.pause(2000);
       await browser.maximizeWindow();

       //2. Click on 'Messenger' link
       await $('//a[@href="https://messenger.com/"]').click();
       await browser.pause(3000);



       //3. Verify 'Keep me signed in' checkbox is NOT selected

        const notSelectedCheckbox=await $('//label[text()="Keep me signed in"]').isSelected();
        expect(notSelectedCheckbox,'Checkbox is selected').to.be.false;
        await browser.pause(3000);


       //4. Click 'Log In' button

       await $('#loginbutton').click();
       await browser.pause(3000);


       //5. Verify link -> "Find your account and log in" is displayed
        const linkDisplayed=await $('//*[@href="https://facebook.com/login/identify/"]').waitForDisplayed({timeout:3000});
        expect(linkDisplayed,'Link is not displayed').to.be.true;



       // 6. Verify 'Continue' button is enabled

       const buttonEnabled=await $('#loginbutton').isEnabled();
       expect(buttonEnabled,'Button in not enabled').to.be.true;


       //7. Verify 'Keep me signed in' checkbox is NOT selected

         const notSelectedBox=await $('//label[text()="Keep me signed in"]').isSelected();
         expect(notSelectedBox,'Box is selected').to.be.false;


       //8. Click 'Keep me signed in' checkbox 
         await $('//label[@class="uiInputLabelInput"]').click();
         await browser.pause(3000);
         


       //9. Verify 'Keep me signed in' checkbox is selected
       const CheckboxSelected=await $('//label[@class="uiInputLabelInput"]').isEnabled();
       expect(CheckboxSelected,'Checkbox is not selected').to.be.true;
       

       
       



    })




})





