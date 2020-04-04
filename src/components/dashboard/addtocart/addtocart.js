import React, {Component} from 'react'
import UpdatedComponent from '../hoc/withCounter'

class AddToCart extends Component {
    constructor() {
        super();
        this.state = {
            product:'',
            quantity:0,
            listProducts: []
        }
    }

changeHandler = (event) => {
    // let x = event.target.value !='' ? event.target.value : ''
    this.setState({
        [event.target.name]: event.target.value
    })
}

submitHandler = () => {
    let {product, quantity, listProducts} = this.state;
    if(product != '' && quantity > 0) {
        listProducts.push({product, quantity})
        this.setState({listProducts})
    } else {
        return alert('please fill complete data')
    }
}

    render(){
        //console.log(this.state.product, this.state.quantity, this.state.listProducts)
        const  {counter,incrementHanlder} = this.props;
        return(
            <div>
                Add to Cart PAGE
                <input name='product'type='text' onChange={this.changeHandler}/>
                <input name='quantity' type='number' onChange={this.changeHandler}/>
                <button type='submit' onClick={this.submitHandler}>Submit</button>
                <ul>
                   
                        {this.state.listProducts.map((item, index) =>{
                            return <li key={index}>{item.product}, {item.quantity}</li>;
                        })}
                   
                </ul>

                <div>
                    <h1>{counter}</h1>
                    <button onClick={incrementHanlder}>increment</button>
                    </div>
            </div>
        )
    }
}

export default UpdatedComponent(AddToCart)