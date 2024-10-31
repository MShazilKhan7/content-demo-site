#include <iostream>
#include <memory>

// Strategy Interface
class PaymentStrategy {
public:
    virtual ~PaymentStrategy() = default;
    virtual void pay(int amount) const = 0;
};


// Concrete Strategy for Credit Card Payment
class CreditCardPayment : public PaymentStrategy {
public:
    // different algorithms providing theri implementation for the pay method
    void pay(int amount) const override {
        std::cout << "Paid " << amount << " using Credit Card." << std::endl;
    }
};

// Concrete Strategy for PayPal Payment
class PayPalPayment : public PaymentStrategy {
public:
    void pay(int amount) const override {
        std::cout << "Paid " << amount << " using PayPal." << std::endl;
    }
};

// Concrete Strategy for Bitcoin Payment
class BitcoinPayment : public PaymentStrategy {
public:
    void pay(int amount) const override {
        std::cout << "Paid " << amount << " using Bitcoin." << std::endl;
    }
};

// Context Class
class PaymentContext {
private:
    std::unique_ptr<PaymentStrategy> strategy;

public:
    PaymentContext(std::unique_ptr<PaymentStrategy> strat) : strategy(std::move(strat)) {}

    void setStrategy(std::unique_ptr<PaymentStrategy> strat) {
        strategy = std::move(strat);
    }

    void executePayment(int amount) const {
        strategy->pay(amount);
    }
};

int main() {
    PaymentContext context(std::make_unique<CreditCardPayment>());
    context.executePayment(100);

    context.setStrategy(std::make_unique<PayPalPayment>());
    context.executePayment(200);

    context.setStrategy(std::make_unique<BitcoinPayment>());
    context.executePayment(300);

    return 0;
}
