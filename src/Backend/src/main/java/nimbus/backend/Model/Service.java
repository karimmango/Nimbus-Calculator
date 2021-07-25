package nimbus.backend.Model;

public class Service {
    private final float apy;
    private final String name;

    public Service(int apy, String name) {
        this.apy = apy;
        this.name = name;
    }

    public float getApy() {
        return apy;
    }

    public String getName() {
        return name;
    }
}
