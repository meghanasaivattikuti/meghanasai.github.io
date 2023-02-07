import { Footer } from "./Footer";

export default class Mail extends Component {
    constructor(){
        super();
        this.state={
            formSubmitted:false,
            isLoading:false
        }
    }
    handleCraftReq=req => {
        this.setState({...this.state,formSubmitted:true, isLoading:true});
        this.handleSubmit(req);
    };
    
    handleSubmit = req => {
        const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
        const userId=process.env.REACT_APP_EMAILJS_USERID;
        const params=req;
        window.emailjs.send('default_service',template,params,userId)
        .then(res=>{
            this.setState({...this.state,isLoading:false})
            console.log(res);
        }).catch(e=>{
            this.setState({...this.state,isLoading:false})
            console.log(e)
        });
    }

    render(){
        return (
            <ContactWrapper>
                <ContactWrap>
                {this.state.isLoading ? 
                    <CircularProgress className='load'/> :
                    this.state.formSubmitted ?
                    <Submitted /> :
                    <ContactForm handleCraftReq={this.handleCraftReq} />
    }
                </ContactWrap>
        </ContactWrapper>
        )  
    }
}