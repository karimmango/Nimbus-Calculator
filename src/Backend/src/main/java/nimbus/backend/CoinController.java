package nimbus.backend;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import nimbus.backend.Model.Coin;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.logging.LoggingFeature;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;
import java.lang.reflect.Type;

import java.util.Arrays;
import java.util.TreeMap;

@RestController
@CrossOrigin
public class CoinController {
    private final TreeMap<Integer, Coin> coinMap;

    public CoinController() {
        coinMap = new TreeMap<>();

    }
    @GetMapping("/coins")
    public String getCoin(){
        Client client = ClientBuilder.newClient( new ClientConfig().property(LoggingFeature.LOGGING_FEATURE_VERBOSITY_CLIENT, LoggingFeature.Verbosity.PAYLOAD_ANY  ));
        WebTarget webTarget = client.target("https://api.pancakeswap.info/api/v2/tokens/0x5f20559235479f5b6abb40dfc6f55185b74e7b55");
        Invocation.Builder invocationBuilder =  webTarget.request().accept(String.valueOf(MediaType.APPLICATION_JSON));
        Response response = invocationBuilder.get(Response.class);
        Gson gson = new Gson();
        //Coin cdm = gson.fromJson(response, Coin.class);
        System.out.println(response);
        return response.toString();
    }





}
