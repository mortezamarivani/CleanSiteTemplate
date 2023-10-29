<template>
    <div  class="mainpage-width headerStyle" >


        <!-- add or edit from of  Queue  *5-->
        <div class=" add-crud-style"  >
            <!-- add or edit from -->
            <div class=" shadow-lg p-2 mb-2 bg-body rounded formStyle flex-dir-c-r">
              <ul class="list-group list-group-flush">


                <!-- header -->
                <div class="displayF justifyC-SB alignItem-C flex-dir-c-r" style="" >
                    <span>
                        Create/Edit for Crud
                    </span>
                </div>

                <hr class="margin-02">
                
                <ErrorPanel :errors="errors" />

                <!-- firstname -->
                <div class="input-group input-group-sm mt-3">
                <span v-if="name =='' " class="input-group-text errStyle" >*</span>
                <input type="text" class="form-control dir-ltr" v-model="name" placeholder="Enter the FirstName" >
                <span class="input-group-text labelStyle dir-ltr" >FirstName</span>
                </div>
                
                <!-- lastName -->
                <div class="input-group input-group-sm mt-3">
                <span v-if="family =='' " class="input-group-text errStyle" >*</span>
                <input type="text" class="form-control dir-ltr" v-model="family" placeholder="Enter the LastName" >
                <span class="input-group-text labelStyle dir-ltr" >LastName</span>
                </div>

                <!-- DateOfBirth -->
                <div class="input-group input-group-sm mt-3 dateTimeFlexStyle" >
                    <span v-if="year =='00' || month=='00' || day=='00'  " class="input-group-text errStyle" >*</span>
  
                    <select class="form-select" v-model="year"  aria-label="Default select example">
                        <option selected value="00">Year </option>
                        <option value="1402">1402</option>
                        <option value="1403">1403</option>
                    </select>

                    <select class="form-select" v-model="month"  aria-label="Default select example">
                        <option selected value="00">Month </option>
                        <option value="01">فروردین</option>
                        <option value="02">اردیبهشت</option>
                        <option value="03">خرداد</option>
                        <option value="04">تیر</option>
                        <option value="05">مرداد</option>
                        <option value="06">شهریور</option>
                        <option value="07">مهر</option>
                        <option value="08">ابان</option>
                        <option value="09">اذر</option>
                        <option value="10">دی </option>
                        <option value="11">بهمن</option>
                        <option value="12">اسفند</option>
                    </select>
                    <select class="form-select" v-model="day"  aria-label="Default select example">
                        <option selected value="00">Day </option>
                        <option v-for="(d,index) in 31" :key="index" :value="fixHour(d)">{{ d }}</option>
                    </select>
                    <span class="input-group-text labelStyle dir-ltr" >DateOfBirth </span>
                </div>
                <span class="colorRed fontS-XXS">{{ dateErr}}</span>

                <!-- phone -->
                <div class="input-group input-group-sm mt-3">
                <span v-if="phone =='' " class="input-group-text errStyle" >*</span>
                <input type="number" class="form-control"  v-model="phone" placeholder=" Enter the PhoneNumber" >
                <span class="input-group-text labelStyle dir-ltr" >PhoneNumber</span>
                </div>

                <!-- email -->
                <div class="input-group input-group-sm mt-3">
                <span v-if="email =='' " class="input-group-text errStyle" >*</span>
                <input type="email" class="form-control dir-ltr" v-model="email" placeholder="Enter the Email" >
                <span class="input-group-text labelStyle dir-ltr" >Email</span>
                </div>
                <span v-if="!getEmailvalidity()" style="color: red;font-size: x-small;" class="dir-ltr" >Plase enter the valid email</span>
                
                <!-- BankAccountNumber -->
                <div class="input-group input-group-sm mt-3">
                <span v-if="bankAccountNumber =='' " class="input-group-text errStyle" >*</span>
                <input type="text" class="form-control dir-ltr"  v-model="bankAccountNumber" placeholder=" Enter the BankAccountNumber" >
                <span class="input-group-text labelStyle dir-ltr" >BankAccount</span>
                </div>
                <span v-if="!getBankAccountvalidity() " style="color: red;font-size: x-small;" class="dir-ltr" >Plase enter the valid BankAccountNumber</span>
                <!-- add and edit btn -->
                <div class="display-flex-sb-style">
                    <button class="btn btn-primary color-dark bgGreen margin-t-05" @click.prevent="saveCrud" >
                        <i class="bi bi-save"></i>
                        Create
                    </button>
                    <button class="btn btn-primary color-dark margin-t-05" v-if="showEditBtn" @click.prevent="editCrud">
                        <i class="bi bi-save"></i>
                        Edit
                    </button>
                </div>

              </ul>
            </div>
        </div>


        <!-- All list of Crud data -->
        <div class="displayF justifyC-C" >
            <p>Cruds List</p>
        </div>

        <div class="displayF mainRowStyle" v-for="(item, index) in crud" :key="index" >

             <!-- first col -->
             <div class="col-responsive-35 displayF flexDir-C " style="align-items: flex-end;">

                <!-- queue number -->
                <div class=" ">
                    <span class="idNumberStyle fontS-S " >  {{ item.id}} </span>
                </div>

                <div class=" ">
                    <span class=" fontS-S " >  {{ item.email}} </span>
                </div>

                <!-- BankAccountNumber -->
                <div class=" " >
                    <span class=" fontS-S " >  {{ item.bankAccountNumber}} </span>
                </div>

            </div>

            <!-- second col -->
            <div class="col-responsive-65 displayF flexDir-C " style="align-items: flex-end;">

                <!-- name family -->
                <div class="displayF alignItem-C  margin-l-1" >

                    <span class="" >  {{ item.firstname }}  {{ item.lastname }} </span>
                    <span class="fontS-XS margin-l-02 rowNumColorStyle"   >  ({{ index+1}}) </span>
                </div>

                <!-- phone -->
                <div  class="displayF alignItem-C fontS-XS  margin-t-05 margin-l-1"  >
                    {{  getPhoneStr(item.phoneNumber)  }} 
                </div>

                <!-- dateOfBirth -->
                <div class="fontS-XS displayF  margin-l-1" >
                    {{ getStrِDate(fixTime(item.dateOfBirth)) }} 
                </div>

                    
                <!--  Btn -->
                <div>
                    <button class="btn btn-warning  btn-sm btnStyle margin-l-02  H70-W20" 
                        @click="setValueToform(item)" >
                        <i class="bi bi-pencil"></i>
                            Edit 
                    </button>

                    <button type="button" class="btn btn-danger btn-sm margin-l-1 btnStyle bgRed H70-W20" 
                        @click="deletCrud(item)">
                        <i class="bi bi-trash"></i>
                        Delete
                    </button>
                </div>

            </div>

   

        </div>



    </div>
</template>

<script setup>
const { public: { apiBase } } = useRuntimeConfig();
import { useToast } from "vue-toastification";
const toast = useToast()

const {currentDate ,getStrِDate} = useDate();

const {  year,month,day,getPhoneStr,fixTime,fixHour } 
        = useCommons('','',currentDate,'','','');

const showEditBtn = ref(false);
const queue = ref([]);
const crud = ref([]);
const name=ref('');
const family=ref('');
const email=ref('');
const id=ref('');
const phone=ref('9120000000');
const bankAccountNumber=ref('');
const updateUserId=ref(1);
const errors=ref([]);
const dateErr=ref();
const isValidEmail=ref(false);
const isValidBankAccount=ref(false);




function getEmailvalidity(){
    if(email.value == "") 
        return true;
    else 
       return isValidEmail.value.value 
}

function getBankAccountvalidity(){
    if(bankAccountNumber.value == "") 
        return true;
    else 
       return isValidBankAccount.value.value 
}


function formValidate(){
    const pattern = /^(\|0)?\d{10}$/;
    isValidBankAccount.value._value == false?errors.value.push("Please enter the valid BankAccount") :""
    isValidEmail.value._value == false?errors.value.push("Please enter the valid email") :""
    family.value == ""?errors.value.push("Please enter the firstname") :""
    name.value == ""?errors.value.push("Please enter the lastname") :""
    phone.value == ""?errors.value.push("Please enter the phonenumber") :""
    email.value == ""?errors.value.push("Please enter the email") :""
    bankAccountNumber.value == ""?errors.value.push("Please enter the bankAccountNumber") :""
    day.value == "00" || day.value == "0" || day.value == ""?errors.value.push("enter the day ") :""
    year.value == "00" || year.value == "0" || year.value == ""?errors.value.push("enter the year") :""
    month.value == "00" || month.value == "0" || month.value == ""?errors.value.push("enter the month") :""
    !pattern.test(phone.value) ?errors.value.push("phone number format is :0000-000-919") :""

}

async function getCrud(){
    queue.value = [];
    const { data , refresh, pending } = await $fetch(`${apiBase}Crud/Getallcrud`, {
            method: 'GET',
        })
    crud.value = data;
}
getCrud()

async function saveCrud(){

    errors.value=[];
    formValidate()
    if(errors.value.length > 0 ) {
        toast.warning("Please corrent this errors")
        return ;
    }
    
    try {
        
        const data =  await $fetch('/api/crud/create' , {
            method: 'POST',
            body: {
                "id":"0",
                "firstname": name.value,
                "lastname": family.value,
                "dateOfBirth": year.value + month.value + day.value,
                "phoneNumber": phone.value,
                "email": email.value,
                "bankAccountNumber":bankAccountNumber.value,
                "status": "true",
                "createDate":new Date().toLocaleDateString('en'),
                "lastUpdateDate": new Date().toLocaleDateString('en'),
                "createUserId": "1",
                "updateUserId": "1"
                }
        })
        console.log('-----------1----------',data.data.info)
        getCrud()
        if(data.status == "NotFound" ){
            toast.warning('NotFound')
        }
        else if( data.status == "Error"){
            toast.warning(data.data.info)
        }
        else if(data.statusMessage =="Bad Request"){
            toast.warning(data)
        }
        else {
            toast.success(`Data successfull created `);
        }  
    } catch (error) {
        toast.error('format of data is not valid')
    } finally {
    }

}

async function deletCrud(item){

   try {
       const data =  await $fetch(`/api/crud/delete`, {
            method: 'DELETE',
            body:{
                id: item.id
            }
        })
        console.log(data)
        if(data.status == "NotFound" || data.status == "Error"){
           toast.warning(Object.values(data.data).flat())
        }
        else {
            toast.success("Delete item successfully");
        }  
    } catch (error) {
        toast.error(error.data.data.message)
    } finally {
        getCrud()
    }

    
}

async function editCrud(){
    errors.value=[];
    formValidate()
    console.log('id.value editCrud',id.value)
    if(errors.value.length > 0 ) {
        toast.warning("Please corrent this errors")
        return ;
    }

    try {
        const data =  await $fetch('/api/crud/edit', {
            method: 'PUT',
            body: {
                "id":id.value,
                "firstname": name.value,
                "lastname": family.value,
                "dateOfBirth": year.value + month.value + day.value,
                "phoneNumber": phone.value,
                "email": email.value,
                "bankAccountNumber":bankAccountNumber.value,
                "status": "true",
                "createDate":new Date().toLocaleDateString('en'),
                "lastUpdateDate": new Date().toLocaleDateString('en'),
                "createUserId": "1",
                "updateUserId": "1"
                }
        })
        if(data.status == "NotFound" || data.status == "Error"){
            toast.erwarningror(Object.values(data.data).flat())
        }
        else {
            toast.success("Edit item successfull ");
            getCrud()
        }  
    } catch (error) {
        toast.error(error.data.data.message)
    } finally {
        
    }
}


function setValueToform(item){
    showEditBtn.value=true;
    name.value = item.firstname;
    family.value = item.lastname;
    email.value = item.email;
    bankAccountNumber.value = item.bankAccountNumber;
    phone.value = item.phoneNumber;
    updateUserId.value = item.updateUserId;
    id.value = item.id;
    year.value=item.dateOfBirth.toString().substr(0,4);
    month.value=item.dateOfBirth.toString().substr(4,2);
    day.value=item.dateOfBirth.toString().substr(6,2);
}


onMounted(() => {
});

isValidEmail.value = computed(() => {
        return /^[^@]+@\w+(\.\w+)+\w$/.test(email.value);
    })

const regexBankAccount = /^[0-9]{9,10}$/;

isValidBankAccount.value = computed(() => {
        return regexBankAccount.test(bankAccountNumber.value);
    })

</script>


<style scoped>
.flex-dir-c-r{
        flex-direction: column-reverse;
    }
.formStyle {border: 0.01px solid #d0cdcd;}
.idNumberStyle{
    border: 0.5px solid #c1b6b6;
    border-radius: 50px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    margin-left: 0.3rem;
    align-items: center;
}

.btnStyle{
        padding: 0.2rem;
        font-size: xx-small;
        margin-top: 0.1rem;
 }

.display-flex-sb-style{
    display: flex;
    justify-content: space-between;
}

.headerStyle{
    margin-top: 3rem;background-color: #ffffff  !important;
}

.rowNumColorStyle{color:#8f8f8f;}
.add-crud-style{
        margin-top: 0.5rem;
        color: #2f1818;font-size: medium;
    }
.mainRowStyle{
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    border: 0.1px solid #c7c1c1;
    margin: 0.2rem;
    border-radius: 4px;
}

.bgGreen{
    background-color: rgb(4 175 120) !important
}
.bgGray{
    background-color:#73a8ed !important
}
.bgRed{
    background-color:red !important
}

.H70-W20{
    width: 70px;
    height: 20px;
}
</style>
