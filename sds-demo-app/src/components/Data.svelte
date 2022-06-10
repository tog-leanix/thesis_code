<script lang="ts">


const header = {
        id: 'ID',
        company: 'Name',
        status: 'Status',
        about: 'Description'
    }
    const myArray =[
  {
    "id": 0,
    "company": "EXTRAGENE",
    "status": "payed",
    "about": "Amet quis elit esse quis est id veniam fugiat aliqua occaecat. Sunt irure ullamco cillum non in ad minim deserunt reprehenderit. Fugiat voluptate consequat dolor nisi enim nostrud sunt. Eu labore exercitation laborum qui ut sunt amet. Sunt aute adipisicing veniam Lorem sint cillum velit ullamco incididunt aliqua. Irure mollit voluptate fugiat amet aliquip eu exercitation sit tempor excepteur. Cillum cupidatat irure ullamco sunt magna ad duis reprehenderit ut reprehenderit do.\r\n"
  },
  {
    "id": 1,
    "company": "ZINCA",
    "status": "payed",
    "about": "Qui tempor voluptate dolor sit sit ipsum sint sit aliquip adipisicing aliqua duis cupidatat. Tempor ex quis cupidatat enim. Et fugiat ullamco magna sit irure magna quis in occaecat dolor nulla occaecat.\r\n"
  },
  {
    "id": 2,
    "company": "VIAGRAND",
    "status": "payed",
    "about": "Cupidatat reprehenderit deserunt mollit proident aute fugiat mollit reprehenderit magna quis laborum veniam. Dolore consectetur amet irure velit in sint aute voluptate amet. Cillum fugiat ipsum ullamco do do qui pariatur labore ipsum. Pariatur nulla labore id ipsum. Eiusmod ad consequat esse sint nisi ad ad id.\r\n"
  },
  {
    "id": 3,
    "company": "CIRCUM",
    "status": "payed",
    "about": "Deserunt tempor sunt eu enim enim dolor. In irure incididunt adipisicing Lorem do quis laboris aute nostrud elit officia mollit nisi do. Dolore consequat tempor deserunt amet laboris nostrud elit voluptate culpa nisi quis aliqua consectetur. Reprehenderit cupidatat excepteur reprehenderit velit qui nisi nostrud velit dolore mollit irure voluptate consectetur. Minim ex ullamco amet cillum eu. Minim nisi cillum mollit minim mollit magna veniam. Enim labore deserunt laboris ea qui esse tempor Lorem exercitation aliqua qui nulla qui.\r\n"
  },
  {
    "id": 4,
    "company": "HATOLOGY",
    "status": "open",
    "about": "Laborum quis veniam est fugiat non deserunt ullamco commodo incididunt non ad aute ex quis. Deserunt ex proident officia dolor est non id id. Voluptate reprehenderit sit est pariatur amet et minim esse magna officia voluptate fugiat. Veniam sint esse deserunt cillum consectetur consectetur adipisicing ea sit ad voluptate. Non aliqua fugiat tempor nostrud irure sint. Id reprehenderit pariatur magna et duis id in minim Lorem commodo.\r\n"
  },
  {
    "id": 5,
    "company": "ANACHO",
    "status": "open",
    "about": "Excepteur culpa veniam minim officia exercitation. Consectetur aliquip voluptate minim consequat. Minim tempor nulla ullamco aute eiusmod sit ad sunt commodo occaecat eu. Ipsum enim laborum in culpa sunt aliquip mollit officia id sint magna. Exercitation ea laborum fugiat labore laboris elit laborum elit sunt ipsum dolore culpa.\r\n"
  },
  {
    "id": 6,
    "company": "ANIVET",
    "status": "open",
    "about": "Mollit culpa magna ut ipsum commodo sunt et sit tempor eiusmod consequat qui. Tempor ut incididunt voluptate dolore adipisicing quis labore sint. Nisi magna ex commodo fugiat adipisicing magna eu esse exercitation anim anim in. Magna commodo ex eu sit voluptate minim deserunt aliquip. Lorem ullamco labore officia cillum qui est nulla commodo elit labore veniam ipsum.\r\n"
  }
];

let isAddEntry= false;
let entry = {
    company: '',
    status: '',
    about: ''
}

function validate() {
  if(entry.company && entry.status && entry.about) {
    myArray.push({...entry, id: myArray.length})
    isAddEntry = false;
  }
}
</script>

<h1>Companies status</h1>
{#if !isAddEntry}
    
<div class="actions">
    <saas-button on:click={()=> isAddEntry = true}>Add +</saas-button>
</div>
<hr>
<saas-table header={header} data={myArray}></saas-table>
{:else}
<form>
    <saas-input label="Company name:" for="company" value={entry.company} on:value={({detail})=> entry.company = detail}>
    </saas-input>
    <saas-input label="Status:" for="status" value={entry.status} on:value={({detail})=> entry.status = detail}>
    </saas-input>
    <saas-input label="Description:" for="about" value={entry.about} on:value={({detail})=> entry.about = detail}>
    </saas-input>
    <saas-button on:click={validate}>Save</saas-button>
</form>
{/if}

<style>
    .actions {
        text-align: right;
    }

    form {
      padding: 4px;
    }
</style>