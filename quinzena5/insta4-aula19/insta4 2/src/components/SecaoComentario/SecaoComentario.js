import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorComentario: ''
	}

	onChangeComentario = (event) => {
		console.log("digitou", event.target.value)
		const novocomentario = event.target.value
		const comentou = {
			valorComentario: novocomentario
		}
		this.setState(comentou)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
