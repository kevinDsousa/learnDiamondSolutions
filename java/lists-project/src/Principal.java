import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
// import java.net.http.HttpResponse;
// import java.net.http.HttpResponse.BodyHandlers;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) throws IOException, InterruptedException {

        Scanner scanner = new Scanner(System.in);
        System.err.println("Digite um filme para busca");
        var busca = scanner.nextLine();
        String endereco = "https://www.omdbapi.com/?t=" + busca + "&apikey=ae58408b";
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endereco))
                .build();
        HttpResponse<String> response = client
                .send(request, BodyHandlers.ofString());
        System.out.println(response.body());
        // client.sendAsync(request, BodyHandlers.ofString())
        // .thenApply(HttpResponse::body)
        // .thenAccept(System.out::println)
        // .join();
        scanner.close();
    }
}
