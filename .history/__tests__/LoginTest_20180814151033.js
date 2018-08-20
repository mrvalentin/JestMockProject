import 'react-native';
import React from 'react';
import Login from '../Login';
import renderer from 'react-test-renderer';
// import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

    const initialState = {
        username: 'valentin',
        password: 'bla'
    };

    const middlewares = [];
    const mockStore = configureStore(middlewares);

    enzyme.configure({ adapter: new Adapter() });

    describe("Testing Mock Login page", () => {
        console.log("username", initialState.username, "|password", initialState.password);
        it("Test render", () => {
            const testRender = renderer.create(
            <Login />
            ).toJSON;
            expect(testRender).toMatchSnapshot();
        });
        it("Test credentials", () =>{
            const wrapper = enzyme.shallow(
                <Login />,
                {context: {store: mockStore(initialState)}},
            );
            console.log("Wrapper selector", wrapper.state());
            // expect(wrapper.state('username')).equal('valentin');
            expect(wrapper.dive()).toMatchSnapshot();
        });
        it("Test states", () =>{
            const login = enzyme.shallow(
                <Login username="val" password="123" />
            );
            expect(login.state('username')).toEqual('val');
        });
        it("Test props", () =>{
            const username = 'val';
            const login = enzyme.shallow(
                <Login username={'val'} password={"123"} />
            );
            expect(login.prop('password')).to.equal('val');
        });
    });