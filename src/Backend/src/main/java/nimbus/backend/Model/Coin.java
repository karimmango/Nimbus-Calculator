package nimbus.backend.Model;

public class Coin {

    private final float price;
    private final String name;
    private final String symbol;



    public Coin(int price, String name, String symbol) {
        this.price = price;
        this.name = name;
        this.symbol = symbol;
    }

    public String getName(){return this.name;}
    public String getSymbol(){return this.symbol;}
    public float getPrice(){return this.price;}



}
