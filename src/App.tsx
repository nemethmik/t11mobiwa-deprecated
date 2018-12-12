/* tslint:disable:max-classes-per-file comment-format */
import * as React from 'react';
import './App.css';

import logo from './logo.svg';
//============== Redux State-Managed Hello Example from https://github.com/Microsoft/TypeScript-React-Starter#adding-state-management 
export interface IStoreState {
  languageName: string;
  enthusiasmLevel: number;
}
//Actions
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;
export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;
export interface IIncrementEnthusiasm {type: INCREMENT_ENTHUSIASM;}
export interface IDecrementEnthusiasm {type: DECREMENT_ENTHUSIASM;}
export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;
export function incrementEnthusiasm(): IIncrementEnthusiasm {
  return {type: INCREMENT_ENTHUSIASM}
}
export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {type: DECREMENT_ENTHUSIASM}
}
//Reducer
export function enthusiasm(state: IStoreState, action: EnthusiasmAction): IStoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  return state;
}
export interface IExtendedHelloProps {
  name: string,
  enthusiasmLevel?: number,
  onIncrement?: () => void,
  onDecrement?: () => void,
}
function ExtendedHello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IExtendedHelloProps) {
  if (enthusiasmLevel <= 0) {throw new Error('You could be a little more enthusiastic. :D');}
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}
import { connect} from 'react-redux';
import { Dispatch } from 'redux';
export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState):IExtendedHelloProps {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}
export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(decrementEnthusiasm()),
    onIncrement: () => dispatch(incrementEnthusiasm()),
  }
}
export const StateManagedHello = connect(mapStateToProps, mapDispatchToProps)(ExtendedHello);

//=============== Hello Example from https://github.com/Microsoft/TypeScript-React-Starter
export interface IHelloProps {
  name: string;
  enthusiasmLevel?: number;
}
// export function Hello({ name, enthusiasmLevel = 1 }: {name:string,enthusiasmLevel?:number}) {
export function Hello({ name, enthusiasmLevel = 1 }: IHelloProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
// export class HelloComponent extends React.Component<IHelloProps, {}> {
export class HelloComponent extends React.Component<IHelloProps, object> {
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
interface IHelloState {
  currentEnthusiasm: number;
}
export class StatefullHello extends React.Component<IHelloProps, IHelloState> {
  constructor(props: IHelloProps) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }
  public render() {
    const { name } = this.props;
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
  private onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  private onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  private updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}
//===================================
export /* default */ class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
