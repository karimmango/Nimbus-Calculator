package nimbus.backend;
import org.springframework.web.bind.annotation.*;
import nimbus.backend.Model.Service;
import java.util.Collection;
import java.util.TreeMap;

@RestController
@CrossOrigin
public class ServiceController {

    private final TreeMap<Integer, Service> serviceMap;

    public ServiceController() {
        serviceMap = new TreeMap<>();
        serviceMap.put(0, new Service(10, "NBU Soft Staking"));
        serviceMap.put(1, new Service(60, "NBU Hard Staking 60 day"));
        serviceMap.put(2, new Service(80, "NBU Hard Staking 180 day"));
    }



    @GetMapping("/service")
    public Collection<Service> getAllProducts() {
        return serviceMap.values();
    }

    @GetMapping("/service/{id}")
    public Service getProductById(@PathVariable Integer id) {
        return serviceMap.get(id);
    }


}
