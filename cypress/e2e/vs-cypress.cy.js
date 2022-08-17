/// <reference types="cypress" />
const locators = require('../fixtures/locators.json');
import {loginPage} from '../page_objects/loginPage';
import {navigation} from '../page_objects/navigation';
import data from '../fixtures/data.json';
let token;


describe('Zavrsni rad', ()=>{
    beforeEach("Visit vivify-scrum app page and click on login button", () =>{
        cy.visit('')
        
     })
     it('Login', ()=>{
        loginPage.login() 
        })
    })
    beforeEach('Stay logged in', () =>{
        window.localStorage.setItem('token', token);
    })
        
    it('Create Board', () =>{
        cy.visit('');
        navigation.clickOnAddBoardButton();
        loginPage.login('knezevicd97@gmail.com','123456789');
        navigation.clickOnAddBoardButton();
        
        
          
            
    })