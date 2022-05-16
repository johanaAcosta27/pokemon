/* eslint-disable no-unused-vars */
import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { getPokemon } from "../src/actions/index";
import configureStore from "redux-mock-store";
import pokemonCreateDefault, { pokemonCreate } from "../../client/src/components/pokemonCreate/PokemonCreate";

configure({ adapter: new Adapter() });

describe("<pokemonCreate />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<pokemonCreate />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Name"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("Name");
    });

    it('Renderiza un input con la propiedad "name" igual a "Name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "life"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("life");
    });

    it('Renderiza una textarea con la propiedad "name" igual a "life"', () => {
      expect(wrapper.find('textarea[name="life"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "attack"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("attack");
    });

    it('Renderiza un input con la propiedad "name" igual a "attack"', () => {
      expect(wrapper.find('input[name="attack"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "defense"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("defense");
    });

    it('Renderiza un input con la propiedad "name" igual a "defense"', () => {
      expect(wrapper.find('input[name="defense"]')).toHaveLength(1);
    });
    
    it('Renderiza un label con el texto igual a "speed"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("speed");
    });

    it('Renderiza un input con la propiedad "name" igual a "speed"', () => {
      expect(wrapper.find('input[name="speed"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "height"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("height");
    });

    it('Renderiza un input con la propiedad "name" igual a "height"', () => {
      expect(wrapper.find('input[name="height"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "weight"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("weight");
    });

    it('Renderiza un input con la propiedad "name" igual a "weight"', () => {
      expect(wrapper.find('input[name="weight"]')).toHaveLength(1);
    });

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  });
})