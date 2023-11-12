
const SimpleForm = () => {




    const handlesubmit =(a)=>{
        a.preventDefault();
        console.log(a.target.name.value)
        console.log(a.target.email.value)
        console.log(a.target.phone.value)
        console.log('button click kora hoise')
    }


    return (
        <div>
            <form onSubmit={handlesubmit} className="flex flex-col border-2 bg-orange-500 w-96">
                <input type="text" name="name" />
                <input type="email" name="email" id="" />
                <input type="text" name="phone" />
                

                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;