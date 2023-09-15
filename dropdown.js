const { expect } = require("chai");

describe ('dropdown', ()=> {
  
    it('Verify the current date is select by default in Sign Up dropdown',async ()=>{
       //1.Launch facebook.com 
       await browser.url('https://www.facebook.com/'); 
       await browser.pause(2000);
       await browser.maximizeWindow();
       //2.Click on Create New Account button
      const clickOnCreateAccount= await $ ('//*[@data-testid="open-registration-form-button"]');
      await clickOnCreateAccount.click();
      //.3 Verify current date is displayed
      const dateDisplayed=await $('select[aria-label=Day]').waitForDisplayed({timeout:3000});
      
      
      expect(dateDisplayed,'Current date is not displayed').to.be.true;
      await browser.pause(2000);


      

      })
      
      it.only('Verify the travelers count on homepage',async ()=>{
        //1.Launch hotels.com 
        await browser.url('https://www.hotels.com/');
        await browser.pause(2000);
        await browser.maximizeWindow();

        //2. Make Adults=4 in Room-1
        await $('//button[@data-stid="open-room-picker"]').click();
        await browser.pause(3000);
        

        const expectedAdultCount = 4;

     await browser.pause(2000);

     for (let i = 0; i < 10; i++) {

      const adultCount = await $('#traveler_selector_adult_step_input-0').getAttribute('value');



      if (Number(adultCount) < Number(expectedAdultCount)) {
        await $('//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button').click();
      }
      else if (Number(adultCount) > Number(expectedAdultCount)) {
        await $('//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button').click();
      }
      else {
        break;

      }
      await browser.pause(2000);
    }
    await $('#traveler_selector_add_room').click(); 
    await browser.pause(2000);

    // Make Adults=3 in Room-2

    const expectedAdultCountThree = 3;

     await browser.pause(3000);

     for (let i = 0; i < 10; i++) {

      const adultCountThree = await $('#traveler_selector_adult_step_input-1').getAttribute('value');



      if (Number(adultCountThree) < Number(expectedAdultCountThree)) {
        await $('//input[@id="traveler_selector_adult_step_input-1"]/following-sibling::button').click();
      }
      else if (Number(adultCountThree) > Number(expectedAdultCountThree)) {
        await $('//input[@id="traveler_selector_adult_step_input-1"]/preceding-sibling::button').click();
      }
      else {
        break;

      }
      await browser.pause(3000);
    }

     await $('#traveler_selector_done_button').click();
     await browser.pause(3000);

    const totalTravelers= await $('//*[text()="7 travelers, 2 rooms"]').isDisplayed();
    expect(totalTravelers,'Total travelers is not equal of adults').to.be.true;
    await browser.pause(3000);
    



  })
     
  
    

})
  

    







