export const state = () => ({
    //state
    cart: [],
    cartLength: 0,
    shippingPrice: 0,
    shippingEstimatedDelivery: "",
  
})

export const actions = {
    addCourseToCart({ state, commit }, course) {
        const cartCourse = state.cart.find(cor => cor._id === course._id);

        if (!cartCourse) {
            commit("pushCourseToCart", course);
        } else {
            commit("incrementCourseQty", cartCourse)
        }
        commit("incrementCartLength")
    }
};

export const mutations = {
    pushCourseToCart(state, course) {
        course.quantity = 1;
        state.cart.push(course)
    },
    incrementCourseQty(state, course) {
        course.quantity++;
        let indexOfCourse = state.cart.indexOf(course);
        state.cart.splice(indexOfCourse, 1, course);
    },
    incrementCartLength(state) {
        state.cartLength = 0;
        if (state.cart.length > 0) {
            state.cart.map(course => {
                state.cartLength += course.quantity;
            });
        }
    },
    changeQty(state, { course, qty }) {
        let cartCourse = state.cart.find(cor => cor._id === course._id);
        cartCourse.quantity = qty;

        state.cartLength = 0;
        if (state.cart.length > 0) {
            state.cart.map(course => {
                state.cartLength += course.quantity;
            });
        }

        let indexOfCourse = state.cart.indexOf(cartCourse);
        state.cart.splice(indexOfCourse, 1, cartCourse);
    },

    removeCourse(state, course) {
        state.cartLength -= course.quantity;
        let indexOfCourse = state.cart.indexOf(course);
        state.cart.splice(indexOfCourse, 1);
    },
    setShipping(state, { price, estimatedDelivery }) {
        state.shippingPrice = price;
        state.shippingEstimatedDelivery = estimatedDelivery;
    },
    clearCart(state) {
        state.cart = []
        state.cartLength = 0
        state.shippingPrice = 0,
        state.shippingEstimatedDelivery = ""
    }
};

export const getters = {
    getCartLength(state) {
        return state.cartLength
    },
    getCart(state) {
        return state.cart;
    },
    getCartTotalPrice(state) {
        let total = 0
        state.cart.map(course => {
            total += course.price * course.quantity
        });
        return total;

    },
    getCartTotalPriceWithShipping(state) {
        let total = 0
        state.cart.map(course => {
            total += course.price * course.quantity
        });
        return total + state.shippingPrice;

    },
    getEstimatedDelivery(state) {
        return state.shippingEstimatedDelivery
    }
}