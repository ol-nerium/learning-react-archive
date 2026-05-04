import { Component } from 'react';

export default class ToDo extends Component<{
  data: { id: string; label: string };
  removeTodo: (id: string) => void;
}> {
  state = {
    checked: false,
    radioValue: '',
  };

  onChangeCheck = (prevStateCheck: boolean) => {
    this.setState({
      checked: !prevStateCheck,
    });
  };

  onChangeRadio = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ radioValue: evt.target.value });
  };

  Gender = {
    MALE: 'male',
    FEMALE: 'female',
    GMAIL: 'gmail',
  };

  render() {
    const { id, label }: { id: string; label: string } = this.props.data;

    return (
      <div
        style={{
          border: '2px solid grey',
          padding: '2rem',
          margin: '1rem auto',
          fontSize: '2rem',
          width: '300px',
        }}
      >
        <label htmlFor={id}>
          <input
            type="checkbox"
            name={label}
            id={id}
            checked={this.state.checked}
            onChange={() => this.onChangeCheck(this.state.checked)}
          />
          {label}:<button onClick={() => this.props.removeTodo(id)}>X</button>
        </label>
        <br />
        <label htmlFor={'male' + id}>
          male{' '}
          <input
            type="radio"
            name={'genderRadio' + id}
            id={'male' + id}
            value={this.Gender.MALE}
            onChange={this.onChangeRadio}
            checked={this.state.radioValue === this.Gender.MALE}
          />
        </label>

        <label htmlFor={'female' + id}>
          female
          <input
            type="radio"
            name={'genderRadio' + id}
            id={'female' + id}
            value={this.Gender.FEMALE}
            onChange={this.onChangeRadio}
            checked={this.state.radioValue === this.Gender.FEMALE}
          />
        </label>

        <label htmlFor={'gmail' + id}>
          gmail
          <input
            type="radio"
            name={'genderRadio' + id}
            id={'gmail' + id}
            value={this.Gender.GMAIL}
            onChange={this.onChangeRadio}
            checked={this.state.radioValue === this.Gender.GMAIL}
          />
        </label>
      </div>
    );
  }
}
