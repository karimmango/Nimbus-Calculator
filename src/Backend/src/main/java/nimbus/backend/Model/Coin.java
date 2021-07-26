package nimbus.backend.Model;

public class Coin {

    private final String price;
    private final String name;
    private final String symbol;



    public Coin(String price, String name, String symbol) {
        this.price = price;
        this.name = name;
        this.symbol = symbol;
    }

    public String getName(){return this.name;}
    public String getSymbol(){return this.symbol;}
    public String getPrice(){return this.price;}



}
