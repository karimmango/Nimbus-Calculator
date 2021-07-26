package nimbus.backend;

import ch.qos.logback.core.db.dialect.SybaseSqlAnywhereDialect;
import nimbus.backend.Model.Coin;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.logging.LoggingFeature;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import java.util.TreeMap;

@RestController
@CrossOrigin
public class CoinController {
    private final TreeMap<Integer, Coin> coinMap;

    public CoinController() {
        coinMap = new TreeMap<>();

    }
    @GetMapping("/NBSC")
    public Coin getNbuBscCoin() throws JSONException {
        Client client = ClientBuilder.newClient( new ClientConfig().property(LoggingFeature.LOGGING_FEATURE_VERBOSITY_CLIENT, LoggingFeature.Verbosity.PAYLOAD_ANY  ));
        WebTarget webTarget = client.target("https://api.pancakeswap.info/api/v2/tokens/0x5f20559235479f5b6abb40dfc6f55185b74e7b55");
        Invocation.Builder invocationBuilder =  webTarget.request().accept(String.valueOf(MediaType.APPLICATION_JSON));
        String response = invocationBuilder.get(String.class);
        JSONObject obj = new JSONObject(response);
        String price = obj.getJSONObject("data").getString("price");
        String name = obj.getJSONObject("data").getString("name");
        String symbol = obj.getJSONObject("data").getString("symbol");
        Coin coin = new Coin(price,name, symbol);
        return coin;
    }

    @GetMapping("/GBSC")
    public Coin getGnbuBscCoin() throws JSONException {
        Client client = ClientBuilder.newClient( new ClientConfig().property(LoggingFeature.LOGGING_FEATURE_VERBOSITY_CLIENT, LoggingFeature.Verbosity.PAYLOAD_ANY  ));
        WebTarget webTarget = client.target("https://api.pancakeswap.info/api/v2/tokens/0xa4d872235dde5694af92a1d0df20d723e8e9e5fc");
        Invocation.Builder invocationBuilder =  webTarget.request().accept(String.valueOf(MediaType.APPLICATION_JSON));
        String response = invocationBuilder.get(String.class);
        JSONObject obj = new JSONObject(response);
        String price = obj.getJSONObject("data").getString("price");
        String name = obj.getJSONObject("data").getString("name");
        String symbol = obj.getJSONObject("data").getString("symbol");
        Coin coin = new Coin(price,name, symbol);
        return coin;
    }

    @GetMapping("/GETH")
    public Coin getGnbuEthCoin() throws JSONException {
        Client client = ClientBuilder.newClient( new ClientConfig().property(LoggingFeature.LOGGING_FEATURE_VERBOSITY_CLIENT, LoggingFeature.Verbosity.PAYLOAD_ANY  ));
        WebTarget webTarget = client.target("https://api.nomics.com/v1/currencies/ticker?key=e825f16c7091cc7691064f37703f9fe3&ids=GNBU&interval=1d");
        Invocation.Builder invocationBuilder =  webTarget.request().accept(String.valueOf(MediaType.APPLICATION_JSON));
        String response = invocationBuilder.get(String.class);
        JSONArray obj = new JSONArray(response);
        String price = obj.getJSONObject(0).getString("price");
        String name = obj.getJSONObject(0).getString("name");
        String symbol = obj.getJSONObject(0).getString("symbol");
        Coin coin = new Coin(price,name, symbol);
        return coin;
    }

    @GetMapping("/NETH")
    public Coin getNbuEthCoin() throws JSONException {
        Client client = ClientBuilder.newClient( new ClientConfig().property(LoggingFeature.LOGGING_FEATURE_VERBOSITY_CLIENT, LoggingFeature.Verbosity.PAYLOAD_ANY  ));
        WebTarget webTarget = client.target("https://api.nomics.com/v1/currencies/ticker?key=e825f16c7091cc7691064f37703f9fe3&ids=NBU&interval=1d");
        Invocation.Builder invocationBuilder =  webTarget.request().accept(String.valueOf(MediaType.APPLICATION_JSON));
        String response = invocationBuilder.get(String.class);
        JSONArray obj = new JSONArray(response);
        String price = obj.getJSONObject(0).getString("price");
        String name = obj.getJSONObject(0).getString("name");
        String symbol = obj.getJSONObject(0).getString("symbol");
        Coin coin = new Coin(price,name, symbol);
        System.out.println(coin.getName());
        return coin;
    }





}
