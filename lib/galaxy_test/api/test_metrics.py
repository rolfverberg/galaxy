import json
from datetime import datetime

from ._framework import ApiTestCase


class MetricsApiTestCase(ApiTestCase):

    def test_create(self):
        metrics = self._get_test_metrics()
        payload = {
            "metrics": metrics
        }
        response = self._post("metrics", payload, json=True)
        self._assert_status_code_is(response, 200)

    def _get_test_metrics(self):
        """
        Returns a list containing dictionaries of the form:
            namespace:       label indicating the source of the metric
            time:            isoformat datetime when the metric was recorded
            level:           an integer representing the metric's log level
            args:            a json string containing an array of extra data
        """
        metrics = [
            {
                "namespace": "api-test",
                "time": f"{datetime.utcnow().isoformat()}Z",
                "level": 1,
                "args": json.dumps({
                    "arg01": "test"
                }),
            }
        ]
        return metrics
