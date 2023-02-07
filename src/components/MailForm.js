export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            email:'',
            multiline:''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const req={
            from_name:this.state.name,
            from_email:this.state.email,
            message:this.state.multiline
        }
        this.props.handleCraftReq(req);
    }
}
