import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage(){

    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log('Clicked!' + e.target.id);

        if (e.target.id == 'user1'){
            sessionStorage.setItem('user-id',"1");
            //how to redirect to App.js ?
            navigate('/');
        }
        else if (e.target.id == 'user2'){
            sessionStorage.setItem('user-id', "2");
            //how to redirect to App.js ?
            navigate('/');
        }
        else{
            alert('incorrect user');
            navigate('/login');
        }
      };

    return (
        <div className="container md grid grid-cols-2">
            <div>
                Login as User1: 
            </div>
            <div>
                <button id="user1" className="inline-block text-md border border-black rounded shadow-sm"
                        onClick={(e)=>handleClick(e)}>User 1</button>
            </div>
            <div>
                Login as User2
            </div>
            <div>
                <button id="user2" className="inline-block text-md border border-black rounded shadow-sm"
                        onClick={(e)=>handleClick(e)}>User 2</button>
            </div>
        </div>
    );
}

export default LoginPage;